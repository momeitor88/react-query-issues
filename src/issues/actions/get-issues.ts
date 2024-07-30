import { githubApi } from '../../api';
import { sleep } from '../../helpers';
import { IIssues, State } from '../interfaces';


export const getIssues = async ( state: State, selectedLabels: string[]): Promise<IIssues[]> => {
    await sleep(1500);
    const params = new URLSearchParams();

    if (state !== State.All) {
        params.append('state', state);
    }

    if(selectedLabels.length > 0){
        params.append('labels', selectedLabels.join(','));
    }

    const { data } = await githubApi.get<IIssues[]>('/issues', { params });
    return data;

}
