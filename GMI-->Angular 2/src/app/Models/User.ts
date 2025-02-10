export class User {
  id!: number;
  role!: Role;
  nomUser!: string;
  prenomUser!: string;
  emailUser!: string;
  mdpUser!: string;
  adresseUser!: string;
  numUser!: string;
  tokens!: Token[];
}

export class Token {
    id!: number;
    token!: string;
    tokenType!: TokenType;
    revoked!: boolean;
    expired!: boolean;
    user!: User;
  }

  export enum TokenType {
    Bearer = 'Bearer',
  }

  export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER'
  }
  export enum Permission {
    ADMIN_READ = 'admin:read',
    ADMIN_UPDATE = 'admin:update',
    ADMIN_CREATE = 'admin:create',
    ADMIN_DELETE = 'admin:delete',
    ADMIN_BAN = 'admin:ban',
    ADMIN_UNBAN = 'admin:unban',
    MANAGER_READ = 'management:read',
    MANAGER_UPDATE = 'management:update',
    MANAGER_CREATE = 'management:create',
    MANAGER_DELETE = 'management:delete',
    USER_VIEW = 'user:view', // Added new permission
  }  