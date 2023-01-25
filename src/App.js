import "./styles.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemText } from "@mui/material";

export default function App() {
  const [tasks, SetTasks] = useState([
    {
      id: 1,
      task: "Watering Plants",
      time: "15:54",
      date: "20-01-2023"
    }
  ]);
  const [task, SetTask] = useState("");
  const [time, SetTime] = useState("");
  const [date, SetDate] = useState("");

  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <form>
        <div>
          <TextField
            style={{ marginTop: 20 }}
            type="text"
            placeholder="task"
            id="task"
            value={task}
            onChange={(e) => {
              console.log(e.target.value);
              SetTask(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            style={{ marginTop: 20 }}
            type="time"
            value={time}
            onChange={(e) => {
              console.log(e.target.value);
              SetTime(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            class="datepicker"
            style={{ marginTop: 20 }}
            type="date"
            value={date}
            onChange={(e) => {
              console.log(e.target.value);
              SetDate(e.target.value);
            }}
          />
        </div>

        <Button
          class="timepicker"
          style={{ marginTop: 20 }}
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            console.log(task + "submit");
            SetTasks([...tasks, { id: tasks.length + 1, task, time, date }]);
          }}
        >
          addTask
        </Button>
      </form>
      <div>
        <List>
          {tasks.map((t) => (
            <ListItem>
              <ListItemText style={{ paddingLeft: 100 }}>
                {t.id}-{t.task} - {t.date} -{t.time}{" "}
              </ListItemText>
              <DeleteIcon
                style={{ marginRight: 200 }}
                onClick={(e) => SetTasks(tasks.filter((ta) => ta.id !== t.id))}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
