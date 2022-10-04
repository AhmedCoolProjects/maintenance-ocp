import httpCommun from "$lib/axios/http-commun";
import type { Writable } from "svelte/store";

export async function getDailyTasks(
    dailyTasksList: Writable<any[]>,
) {
    
    await httpCommun
        .get('/operations/frq/1', {})
        .then((res) => {
            dailyTasksList.set(res.data);
        })
        .catch((er) => {
            console.error('er: ', er);
        });
}
export async function getTwoWeeksTasks(
    twoWeeksTasksList: Writable<any[]>,
) {
    await httpCommun
        .get('/operations/frq/15', {})
        .then((res) => {
            twoWeeksTasksList.set(res.data);
        })
        .catch((er) => {
            console.error('er: ', er);
        });
}

export async function getMonthlyTasks(
    monthlyTasksList: Writable<any[]>,
) {
    await httpCommun
        .get('/operations/frq/30', {})
        .then((res) => {
            monthlyTasksList.set(res.data);
        })
        .catch((er) => {
            console.error('er: ', er);
        });
}

export async function getAllTasks(
    allTasksList: Writable<any[]>,
) {
    await httpCommun
        .get('/operations/all', {})
        .then((res) => {
            allTasksList.set(res.data);
        })
        .catch((er) => {
            console.error('er: ', er);
        });
}

export async function getRequiredTasks(
    requiredTasksList: Writable<any[]>,
) {
    await httpCommun
        .get('/operations/status/REQUIRED', {})
        .then((res) => {
            requiredTasksList.set(res.data);
        })
        .catch((er) => {
            console.error('er: ', er);
        });
}

export async function getInProgressTasks(
    inProgressTasksList: Writable<any[]>,
) {
    await httpCommun
        .get('/operations/status/IN_PROGRESS', {})
        .then((res) => {
            inProgressTasksList.set(res.data);
        })
        .catch((er) => {
            console.error('er: ', er);
        });
}

export async function getDoneTasks(
    doneTasksList: Writable<any[]>,
) {
    await httpCommun
        .get('/operations/status/DONE', {})
        .then((res) => {
            doneTasksList.set(res.data);
        })
        .catch((er) => {
            console.error('er: ', er);
        });
}

export async function getWaitingTasks(
    waitingTasksList: Writable<any[]>,
) {
    await httpCommun
        .get('/operations/status/WAITING', {})
        .then((res) => {
            waitingTasksList.set(res.data);
        })
        .catch((er) => {
            console.error('er: ', er);
        });
}

export async function getSuggestedTasks(
    suggestedTasksList: Writable<any[]>,
){
    await httpCommun
        .get('/operations/today/suggestions', {})
        .then((res) => {
            suggestedTasksList.set(res.data);
        })
        .catch((er) => {
            console.error('er: ', er);
        });
}

export async function getLogs(
    logsList: Writable<any[]>,
){
    await httpCommun
        .get('/logs/all', {})
        .then((res) => {
            logsList.set(res.data);
        })
        .catch((er) => {
            console.error('er: ', er);
        });
}

export async function getTaskById(
    task: Writable<any>,
    id: string,
){
    await httpCommun
        .get(`/operations/${id}`, {})
        .then((res) => {
            task.set(res.data);
        })
        .catch((er) => {
            console.error('er: ', er);
        });
}

export async function getLogsCountPerDay(
    logsCountPerDay: Writable<any[]>,
){
    await httpCommun
        .get('/logs/days', {})
        .then((res) => {
            const myList = res.data;
            // add group attribute inside each object
            myList.forEach((item: any) => {
                item.group = "incompletedDays";
            });
            // order by parseInt _id
            myList.sort((a: any, b: any) => {
                return parseInt(a._id) - parseInt(b._id);
            });
            
            logsCountPerDay.set(myList);
        })
        .catch((er) => {
            console.error('er: ', er);
        });

}