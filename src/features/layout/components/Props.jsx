import Avatar from "./Avatar"
import Dwayne from "/images/La_roc.jpg"
import Willie from "/images/willie_colon.jpg"
import Robert from "/images/450_1000.jpg"
const Props = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Props React</h1>

      <div className="row">
        <div className="col">
          <Avatar nombre="Dwayne Douglas Johnson" imagen={Dwayne}/>
        </div>

        <div className="col">
          <Avatar nombre="Willie Colon" imagen={Willie} />
        </div>

        <div className="col">
          <Avatar nombre="Robert Downey Jr." imagen={Robert} />
        </div>
      </div>
    </div>
  )
}

export default Props