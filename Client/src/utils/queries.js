import {gql} from "@apollo/client";

export const QUERY_HIGHSCORE =  gql`
{
  highScores {
    _id
    createdAt
    highScoreName
    highScoreTotal
  }
}
`