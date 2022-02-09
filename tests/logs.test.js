const { logInfo } = require("../api/logs.js");

const LOG_CODE = "6xRmBfCzJ2dLWq9M";

test("logInfo should return promise with correct logs data", () => {
  return logInfo(LOG_CODE).then((data) => {
    // Logs
    expect(data.duration).toBe(4219435);
    expect(data.zone).toBe("Sanctum of Domination");
    expect(data.title).toBe("Sanctum of Domination");
    expect(typeof data.fights).toBe("object");
    // Remnant of Ner'zhul
    expect(data.fights[3].boss).toBe(2432);
    expect(data.fights[3].name).toBe("Remnant of Ner'zhul");
    expect(data.fights[3].duration).toBe(219901);
    expect(data.fights[3].difficulty).toBe("Mythic");
    expect(data.fights[3].bossPercentage).toBe("Defeated");
    // Guardian of the First Ones
    expect(data.fights[6].boss).toBe(2436);
    expect(data.fights[6].name).toBe("Guardian of the First Ones");
    expect(data.fights[6].duration).toBe(256847);
    expect(data.fights[6].difficulty).toBe("Mythic");
    expect(data.fights[6].bossPercentage).toBe("Defeated");
  });
}, 10000);
