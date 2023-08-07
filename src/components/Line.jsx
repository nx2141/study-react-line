import React, { useEffect, useState } from "react";
import SignOut from "./Signout";
import { db } from "../firebase.jsx";

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div key={id}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
          //Reactでmap関数を使ってコンポーネントのリストをレンダリングする際、
          //丸括弧（()）を使うことが一般的です。
          //丸括弧を使うと、複数行のJSXを返すことができ、読みやすく整形されたコードになります。
          //丸括弧は、複数行のJSXを包括して、一つの式として扱うために使用されます。
          //丸括弧がないと、JavaScriptは各行の末尾で式が終了していると解釈する可能性があります。
          //このため、丸括弧を使うことで、コードの意図が明確になり、エラーの発生を防ぐことができます。
          //ただし、mapの中で一行で完結する場合は、丸括弧なしで書くこともできます
        ))}
      </div>
    </div>
  );
}

export default Line;
