function JobCard(props: { title: string }) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Acme Ltd</p>
      <p>Location: Queens, NY</p>
      <p>Salary: 94k</p>
      <p>Work type: Remote</p>
    </div>
  );
}

export default JobCard;
