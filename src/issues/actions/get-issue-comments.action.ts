import { githubApi } from '../../api';
import { sleep } from '../../helpers';
import { IIssues } from '../interfaces';


export const getIssueComments = async (issueNumber:number): Promise<IIssues[]> => {
    await sleep(1500);
    const { data } = await githubApi.get<IIssues[]>(`/issues/${issueNumber}/comments`);
    return data;

}
