import { IIssues, State } from '../interfaces';
import { IssueItem } from './IssueItem';

interface Props {
  issues: IIssues[],
  onChangeState: (state: State) => void,
  state: State
}

export const IssueList = ({issues, onChangeState, state }: Props) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button onClick={ () => onChangeState(State.All) } className={`btn ${ state === State.All ? 'active' : '' }`}>All</button>
        <button onClick={ () => onChangeState(State.Open) } className={`btn ${ state === State.Open ? 'active' : '' }`}>Open</button>
        <button onClick={ () => onChangeState(State.Close) } className={`btn ${ state === State.Close ? 'active' : ''}`}>Closed</button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
