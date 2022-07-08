import { useEffect, useState } from "react";
import { JokeViewModel } from "./joke-model";
import request from "../../utils/get-request";



export function useJokeModel(): JokeViewModel{
  const [joke, setJoke] = useState("");

  async function getJoke(cat: string){
    const response = await request(`https://v2.jokeapi.dev/joke/${cat}?type=single`)
    setJoke(response?.joke)
  }

  return new JokeViewModel({value: joke, onFetchSingleJoke: getJoke}).create()
}