function JobCard(props: { title: string; company: string }) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.company}</p>
      <p>Location: Queens, NY</p>
      <p>Salary: 94k</p>
      <p>Work type: Remote</p>
    </div>
  );
}

export default JobCard;
