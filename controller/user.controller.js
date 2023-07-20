const getUsers = async (req, res) => {
  const result = {
    settings: {
      success: 1,
      status: 200,
      message: "Users detail found",
    },
    data: [
      {
        name: "Nirmal Mali",
        organization: "Acquiant Softtect pvt ltd.",
        stream: "MEAN Development.",
      },
      {
        name: "Purvesh Patel",
        organization: "Acquiant Softtect pvt ltd.",
        stream: "PHP Development.",
      },
      {
        name: "Hitesh Kumawat",
        organization: "Acquiant Softtect pvt ltd.",
        steam: "Quality Analyst.",
      },
      {
        name: "Peter David",
        organization: "Sinform pvt ltd",
        stream: "Project Manager",
      },
    ],
  };

  res.send(result);
};

module.exports = { getUsers };
