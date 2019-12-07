import React from 'react';
import { Link } from 'gatsby';
import Title from '../Title';

import infoStyles from './info.module.css';

// export default function info() {
//   return (
//     <section className="py-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-10 col-sm-8 mx-auto text-center">
//             <p className="lead text-muted mb-5">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil quos praesentium tempore dolorum itaque architecto laudantium eaque culpa, cumque sed voluptatum sapiente, laboriosam repellendus!
//             </p>
//           </div>
//         </div>
//       </div>
      
//     </section>
//   )
// }

const Info = () => (
  <section className= {infoStyles.aboutsection}>
    <div className="container">
      <Title title="My story" />
      <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-muted mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            nihil quos praesentium tempore dolorum itaque architecto laudantium
            eaque culpa, cumque sed voluptatum sapiente, laboriosam repellendus!
          </p>
          <Link to="/about/">
            <button className="btn btn-yellow text-uppercase">About me!</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Info;
