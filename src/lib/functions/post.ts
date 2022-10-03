import httpCommun from "$lib/axios/http-commun";

export async function updateTaskStatus(
    taskId: string,
    status: string,
) {
    await httpCommun
        .post(`/operations/update/status`, {
            taskId: taskId,
            status: status,
        })
        .then((res) => {
            console.log('res: ', res);
            alert('Task status updated');
            // refresh page
            window.location.reload();
        })
        .catch((er) => {
            console.error('er: ', er);
            alert('Task status update failed');
        });
}
