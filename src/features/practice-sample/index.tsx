import React, { useEffect, useMemo, useState } from 'react';

type User = {
  id: number;
  name: string;
  role: string;
};

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // 1. APIからユーザー一覧を取得

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await fetch('http://localhost:8080/api/users');
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []); // ← ここで何かが起きている？

  // 2. 検索キーワードでフィルタリング
  // useMemo
  const filteredUsers = useMemo(() => {
    console.log('Filtering...');
    return users.filter((u) => u.name.toLowerCase().includes(keyword.toLowerCase()));
  }, [users, keyword]);

  return (
    <div>
      <input
        type='text'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search user...'
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredUsers.map(
            (
              user: User, // ← User型に変更
            ) => (
              <li key={user.id}>
                {user.name} ({user.role})
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  );
};
