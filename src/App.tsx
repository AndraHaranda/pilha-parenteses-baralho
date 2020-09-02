import React, { useState } from "react"

function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
      <div>
      </div>
  );
}

export default App;