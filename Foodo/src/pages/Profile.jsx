import {
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRow,
  IonCol,
  useIonViewWillEnter,
  useIonLoading,
} from "@ionic/react";
import "../style/Profile.css";
import Header from "../components/Header";
import dbT from "../service/service.jsx";
import { useEffect, useState } from "react";
import Post from "../components/post";
import uc from "../service/userControl";
import { useHistory } from "react-router";

export default function Profile() {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [array, setArray] = useState([]);
  const [present, dismiss] = useIonLoading();

  const history = useHistory();

  async function userPosts() {
    present();
    const p = await dbT.getPost();

    const u = await uc.getUserKey();

    let arr = [];

    const postsArray = Object.keys(p).map((key) => ({
      key: key,
      ...p[key],
    }));

    for (const po of postsArray) {
      console.log(u);
      if (po.uid === u) {
        arr.push(po);
        console.log(po);
      }
    }
    console.log(arr);
    setArray(arr.reverse());
    dismiss();
  }

  async function loadUser() {
    const users = await uc.getLoggedUser();
    setUser(users);
  }

  useIonViewWillEnter(async () => {
    if (uc.checkUserLoggedIn()) {
      loadUser();
      userPosts();
    } else {
      history.replace("/login");
      window.location.reload();
    }
  });

  return (
    <IonPage>
      <IonContent fullscreen className="profileContainer">
        <Header />
        <IonRow size="12" className="profileImgRow">
          <img className="profileImg" src={user?.profileImg} alt="" />
        </IonRow>
        <IonRow size="12">
          <h2>{user?.username}</h2>
        </IonRow>
        <IonRow size="12" className="profilePosts">
          <IonCol size="6">
            <h3>My Posts</h3>
          </IonCol>
          <IonCol size="6">
            <IonButton color="success" href="/Addpost">
              Create post
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          {array && array.length > 0 ? (
            array?.map((array) => <Post post={array} key={array.id} />)
          ) : (
            <p>Loading...</p>
          )}
        </IonRow>
      </IonContent>
    </IonPage>
  );
}
