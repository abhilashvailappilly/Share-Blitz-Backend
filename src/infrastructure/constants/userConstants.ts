
interface UserLoginEnum {
  ADMIN :string
  USER:string
}

/**
 * @type {{ ADMIN: "ADMIN"; USER: "USER"} as const}
 */
export const UserRolesEnum : UserLoginEnum = {
    ADMIN: "ADMIN",
    USER: "USER" ,
  };
  
  export type UserRoles = typeof UserRolesEnum[keyof typeof UserRolesEnum];

  export const AvailableUserRoles : UserRoles[] = Object.values(UserRolesEnum );
  
 
 
  
  /**
   * @type {{ GOOGLE: "GOOGLE";  EMAIL_PASSWORD: "EMAIL_PASSWORD"} as const}
   */
  export const UserLoginType : {GOOGLE:string,EMAIL_PASSWORD:string} = {
    GOOGLE: "GOOGLE",
    EMAIL_PASSWORD: "EMAIL_PASSWORD",
  };
  
  export const AvailableSocialLogins = Object.values(UserLoginType);
  

  