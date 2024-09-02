import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonRefresher,
  IonRefresherContent,
  useIonLoading,
} from "@ionic/react";
import "../style/Home.css";
import Post from "../components/post";
import { useState } from "react";
import dbT from "../service/service.jsx";
import Header from "../components/Header";
import uc from "../service/userControl";
import { isEmpty } from "@firebase/util";
import { Toast } from "@capacitor/toast";
import { useHistory } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const [present, dismiss] = useIonLoading();

  async function postsArr() {
    present();

    const data = await dbT.getPost();

    // map object into an array with objects
    const postsArray = Object.keys(data).map((key) => ({
      key: key,
      ...data[key],
    }));

    setPosts(postsArray.reverse());
    dismiss();
  }

  function refresh() {
    window.location.reload();
    postsArr();
  }

  function doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.detail.complete();
    }, 2000);
  }

  useIonViewWillEnter(() => {
    if (uc.checkUserLoggedIn()) {
      postsArr();
    } else {
      history.replace("/login");
      window.location.reload();
    }
  });

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {posts &&
          posts?.map((post) => (
            <Post post={post} key={post.key} reload={refresh} />
          ))}
      </IonContent>
    </IonPage>
  );
}
