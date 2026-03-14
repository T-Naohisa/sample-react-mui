import { useContext, createContext, useState } from "react";

// contextで保持するユーザー情報の型
export type User = {
  id: string;
  name: string;
} | null;

// contextの型定義
export interface AuthContextType {
  user: User;
  login: (id: string, name: string) => void;
  logout: () => void;
}
// errorの型定義
export interface Error {
  id: string;
  message: string;
}

// AuthContextの作成
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * ログインログアウトの関数をもつWrapper部品
 * グローバル化し、どの画面でもログアウトなどの実装ができるようにしている
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const login = (id: string, name: string) => {
    setUser({ id, name });
  };
  const logout = () => {
    setUser(null);
  };
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

// contextを利用して値を取得したい場合に利用するカスタムフック
export const useAuth = (): AuthContextType | Error => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    const error: Error = { id: "001", message: "not userInfo" };
    return error;
  }
  return context;
};
