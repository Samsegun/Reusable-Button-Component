const FooterText = () => {
  return (
    <div>
      <p className="text-xs font-ubuntu text-[#828282]">
        Icons:{" "}
        <a href="https://material.io/resources/icons/?style=round">
          https://material.io/resources/icons/?style=round
        </a>
      </p>

      <p className="mb-6 font-medium mt-9 font-montserat text-[#A9A9A9] text-sm">
        created by{" "}
        <a href="https://github.com/Samsegun" className="font-bold">
          Samsegun
        </a>{" "}
        - <a href="https://devchallenges.io/">devChallenges.io</a>
      </p>
    </div>
  );
};

export default FooterText;
