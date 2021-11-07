import React from "react";
import "./HomeBody.css";

const Home2 = () => {
  return (
    <div className="container">
      <div className="container-text">
        <h1>What is Genetic Algorithm?</h1>
        <p>
          Genetic algorithms are a class of numerical and combinational
          optimizers which are especially useful for solving complex nonlinear
          and nonconvex problems. Effort to apply genetic algorithms to large
          scale and latency-sensitive problems has been made in Ref. Pipelined
          genetic propagation is proposed to map the algorithm to DFEs
          efficiently and address the challenge in large shared population
          memory and intrinsic loop-carried dependency. Such DFE-oriented
          approach is intrinsically distributed and pipelined. The genetic
          algorithm solver is represented as a graph of loosely coupled genetic
          operators, which allows the solution to be scaled to the available
          resources and to dynamically change topology at run-time to explore
          different solution strategies. Experiments show the DFE is effective
          in accelerating different applications that apply genetic algorithms.
        </p>

    
    
        
      </div>

      <div className = "img_cycle" >
        <img src="/images/contributor/natuaral.jpg"  width="600px" ></img>
        <p>The cycle of natural evolution</p>
    </div>
    </div>
  );
}

export default Home2;
