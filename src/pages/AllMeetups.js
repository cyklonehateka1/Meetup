import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

function AllMeetupsPage() {
  const [isloading, setIsLoading] = useState();
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://meetup-325d8-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

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
