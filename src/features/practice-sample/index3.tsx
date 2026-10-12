import React, { useState } from 'react';

type UserProfile = {
  name: string;
  age: number;
};

export const ProfileEditor: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Taro',
    age: 25,
  });

  const handleNameChange = (newName: string) => {
    // ❓ 問題: nameだけを書き換えてageを残したいが、この書き方だとおかしなことになる。
    // 正しくオブジェクトを更新するにはどう書くべき？

    // スプレッド構文を使用し新規のオブジェクトを生成する中で既存の値を設定、更新対象だけ上書きをするように処理する
    const newProfile = { ...profile, name: newName };
    setProfile(newProfile);
  };

  return (
    <div>
      <p>
        Name: {profile.name} (Age: {profile.age})
      </p>
      <button onClick={() => handleNameChange('Jiro')}>名前をJiroに変更</button>
    </div>
  );
};
