import AddContact from "../components/AddContact/AddContact";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import DataContact from "../components/DataContact/dataContact";
import Footer from "../components/Footer/Footer";
import Screen from "../components/Screen/Screen";
import UnderCover from "../components/UnderCover/UnderCover";

export default function Home() {
  return (
    <div className="Home">
      <Screen />
      <BreadCrumb />
      <DataContact />
      {/* <AddContact /> */}
      <UnderCover />
      <Footer />
    </div>
  )
}
