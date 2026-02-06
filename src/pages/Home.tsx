import Hero from "../components/Hero";
import MainProjectsTable from "../components/MainProjectsTable";
import SecondaryProjectsTable from "../components/SecondaryProjectsTable";
import Explorations from "../components/Explorations";

export default function Home() {
  return (
    <>
      <div style={{ scrollSnapAlign: 'start' }}>
        <Hero />
      </div>
      <div style={{ scrollSnapAlign: 'start' }}>
        <MainProjectsTable />
      </div>
      <div style={{ scrollSnapAlign: 'start' }}>
        <SecondaryProjectsTable />
      </div>
      <div style={{ scrollSnapAlign: 'start' }}>
        <Explorations />
      </div>
    </>
  );
}