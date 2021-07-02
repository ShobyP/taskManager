export function fetchTasks() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/tasks")
      .then((res) => {
        return res.ok ? resolve(res.json()) : reject();
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

export function deleteTask(id) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.ok ? resolve(res) : reject();
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
