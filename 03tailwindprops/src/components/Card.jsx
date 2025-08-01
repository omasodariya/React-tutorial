import React from 'react'

const Card = (props) => {
  // console.log("props: ",props);
  // console.log(username);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{props.btnText || "Replacement"}</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
