package com.alibou.security.Models;

import com.alibou.security.Entities.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

  private String nomUser;
  private String prenomUser;
  private String emailUser;
  private String mdpUser;
  private String adresseUser;
  private String numUser;
  private Role role;
}
