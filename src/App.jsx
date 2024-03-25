import { Post } from "./components/Post";
import { Header } from "./components/Header";
import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="André Luiz"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in quia, voluptates dolores omnis illum earum soluta non veritatis impedit harum commodi ullam distinctio, temporibus laudantium labore porro est error."
          />
        </main>
      </div>
    </>
  );
}
