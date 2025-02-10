package com.alibou.security.Service;

import com.alibou.security.Entities.User;
import com.alibou.security.Models.ChangePasswordRequest;
import com.alibou.security.Models.RegisterRequest;
import com.alibou.security.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User createUser(RegisterRequest request) {
        User user = User.builder()
                .nomUser(request.getNomUser())
                .prenomUser(request.getPrenomUser())
                .emailUser(request.getEmailUser())
                .mdpUser(passwordEncoder.encode(request.getMdpUser()))
                .numUser(passwordEncoder.encode(request.getNumUser()))
                .role(request.getRole())
                .build();
        return userRepository.save(user);
    }

    public Optional<User> getUserById(int userId) {
        return userRepository.findById(userId);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(int userId, RegisterRequest request) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setNomUser(request.getNomUser());
            user.setPrenomUser(request.getPrenomUser());
            user.setEmailUser(request.getEmailUser());
            user.setMdpUser(passwordEncoder.encode(request.getMdpUser()));
            user.setRole(request.getRole());
            return userRepository.save(user);
        } else {
            // Handle user not found exception
            return null;
        }
    }

    public void deleteUser(int userId) {
        userRepository.deleteById(userId);
    }
    public void changePassword(ChangePasswordRequest request, Principal connectedUser) {

        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        // check if the current password is correct
        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new IllegalStateException("Wrong password");
        }
        // check if the two new passwords are the same
        if (!request.getNewPassword().equals(request.getConfirmationPassword())) {
            throw new IllegalStateException("Password are not the same");
        }

        // update the password
        user.setMdpUser(passwordEncoder.encode(request.getNewPassword()));

        // save the new password
        userRepository.save(user);
    }
}
