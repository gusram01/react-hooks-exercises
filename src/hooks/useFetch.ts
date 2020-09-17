import { useState, useEffect, useRef } from 'react';

interface QuoteBreakingBadId {
  author: string;
  quote: string;
  quote_id: number;
  series: string;
}
interface ErrorBadId {
  code: string;  // "22P02"
  file: string;  // "numutils.c"
  length: number;  // 94
  line: string;  // "62"
  name: string;  // "error"
  position: string;  // "39"
  routine: string;  // "pg_atoi"
  severity: string;  // "ERROR"
}
interface StateResponse {
  data: QuoteBreakingBadId[] | any[];
  loading: boolean;
  error: boolean | null;
}

export const useFetch = (url: string) => {

  const isMounted = useRef(true);
  let initialState: StateResponse = { data: [], loading: true, error: null }

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState(initialState);
    fetch(url)
      .then(resp => resp.json())
      .then((data) => {

        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data
          });
        }
        if (!data) {
          throw new Error('putsss')
        }
      }).catch(() => setState({ ...initialState, error: true }));
  }, [url]);

  return state;
};
