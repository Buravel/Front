import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [by, setBy] = React.useState("");

  const handleChange = (event) => {
    setBy(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-label">최신순</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={by}
          onChange={handleChange}
        >
          <option value={1} selected>최신순</option>
          <option value={2}>가격순</option>
          <option value={3}>별점순</option>
        </Select>
      </FormControl>
    </div>
  );
}
