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

export function addTask(task) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((res) => {
        return res.ok ? resolve(res.json()) : reject();
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

export function getSingleTask(id) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:5000/tasks/${id}`)
      .then((res) => {
        return res.ok ? resolve(res) : reject();
      })
      .catch((err) => reject(err));
  });
}
