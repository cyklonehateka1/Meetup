import MeetupList from "../components/meetups/MeetupList";
import { useState } from "react";

function AllMeetupsPage() {
  const [isloading, setIsLoading] = useState();
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  fetch("https://meetup-325d8-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });

  if (isloading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
