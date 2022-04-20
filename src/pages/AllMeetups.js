import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is first meetup",
    image:
      "https://images.hindustantimes.com/tech/img/2020/09/24/960x540/Untitled_design_(12)_1600925482551_1600925492949.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss.",
  },
  {
    id: "m2",
    title: "This is second meetup",
    image:
      "https://images.hindustantimes.com/tech/img/2020/09/24/960x540/Untitled_design_(12)_1600925482551_1600925492949.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss.",
  },
];
function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
