import React, { useEffect, useState } from "react";
import { Input, Label, Menu } from "semantic-ui-react";
import JobPositionsService from "../services/positionService";
const Positions = () => {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionsService = new JobPositionsService();
    jobPositionsService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, [jobPositions]);

  return (
    <div>
      <Menu vertical>
        <Menu.Item header>İş pozisyonları</Menu.Item>
        {jobPositions.map((job) => (
          <Menu.Item name="updates">{job.position}</Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Positions;
