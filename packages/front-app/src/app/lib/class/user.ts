import { UserType } from '@/app/lib/type';

export class User {
  private id?:string;
  private name?:string;
  private email?:string;
  private password?:string;
  private createAt?:Date;

  constructor(user:UserType) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.createAt = user.createAt;
  }

  /** setter id
   * id: user id
   */
  public set setId(id:string) {
    this.id = id;
  }

  /** getter id
   * return id
   */
  public get getId():string|undefined {
    return this.id;
  }

  /** setter name
   * name: user name
   */
  public set setName(name:string) {
    this.name = name;
  }

  /** getter name
   * return name
   */
  public get getName():string|undefined {
    return this.name;
  }

  /** setter email
   * email: user email
   */
  public set setEmail(email:string) {
    this.email = email;
  }

  /** getter email
   * return email
   */
  public get getEmail():string|undefined {
    return this.email;
  }

  /** setter password
   * password: user password
   */
  public set setPassword(password:string) {
    this.password = password;
  }

  /** getter password
   * return password
   */
  public get getPassword():string|undefined {
    return this.password;
  }

  /** setter createAt
   * createAt: Date
   */
  public set setCreateAt(createAt:Date) {
    this.createAt = createAt;
  }

  /** getter createAt
   * return createAt
   */
  public get getCreateAt():Date|undefined {
    return this.createAt;
  }
  
}