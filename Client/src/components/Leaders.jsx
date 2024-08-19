import React from "react";
import Table from "react-bootstrap/Table";
import Header from "./Header";
import {useQuery} from "@apollo/client";
import {QUERY_HIGHSCORE} from "../utils/queries";
const LeaderBoard = () => {
  const {data,loading,error} = useQuery(QUERY_HIGHSCORE)
    const highScores = data?.highScores|| []
    console.log("highscores!", highScores)
  return (
    <>
      <Header />
      <div className="container-fluid backGround leaderBoard  ">
        <section className="row">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>High Score</th>
              </tr>
            </thead>
            <tbody>
              {
                highScores&&highScores.map((score, index) => (
                  <tr>
                  <td>{index+1}</td>
                  <td>{score.highScoreName}</td>
                  <td>{score.highScoreTotal}</td>
                </tr>

                )
              ) 
              }
              
            </tbody>
          </Table>
        </section>
      </div>
    </>
  );
};
//add click event to link and inside event handler clear the user session and redirect to page.
export default LeaderBoard;

// Above is our leaderboard comonent.
