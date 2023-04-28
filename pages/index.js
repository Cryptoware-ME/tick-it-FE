import Slider from "../components/Slider";
import EventCard from "../components/EventCard";
import { Container, Row } from "react-bootstrap";
import Stats from "../components/Stats";
import ExploreEvents from "../components/ExploreEvents";
import { getUsers } from "../axios/user.axios";
import { useEffect,useState } from "react";
export default function Home() {

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await getUsers({where: {email:'charbelboukhalil84@gmail.com'}});
      setData(response);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
   console.log(data)
  }, [data]);
 
  return (

    <main style={{ backgroundColor: " var(--background)" }}>
      <Slider />
      <Container style={{ paddingBottom: "65px" }}>
        <Row style={{ marginTop: "65px" }}>
          <p className="section-title">Upcoming Events Near You</p>
          <Row>
            {[0, 1, 2]?.map((event, index) => (
              <EventCard key={index} />
            ))}
          </Row>
        </Row>
        <Row id="explore" style={{ marginTop: "65px" }}>
          <ExploreEvents />
        </Row>
        {/* <Row style={{ marginTop: "65px" }}>
          <Stats />
        </Row> */}
      </Container>
    </main>
  );
}
