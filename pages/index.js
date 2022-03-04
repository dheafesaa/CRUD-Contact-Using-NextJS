import AddContact from "../components/AddContact/AddContact";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
// import DataContact from "../components/DataContact/dataContact";
import Footer from "../components/Footer/Footer";
import Screen from "../components/Screen/Screen";
import UnderCover from "../components/UnderCover/UnderCover";
import Header from "../components/Header/Header";
import DataContact from "../components/DataContact/dataContact";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Screen />
      <BreadCrumb />
      {/* <DataItem /> */}
      <DataContact />
      {/* <AddContact /> */}
      <UnderCover />
      <Footer />
    </div>
  );
}
