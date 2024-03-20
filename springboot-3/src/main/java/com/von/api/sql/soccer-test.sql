--오름차순 정렬
SELECT * FROM team ORDER BY team_name;
--포지션 종류를 나열. 중복은 제거, 포지션 속성값이 없으면 공백.
SELECT DISTINCT POSITION FROM player;
-- 003. 플레이어의 포지션 종류를 나열하시오. 단, 중복은 제거하고 포지션이 없으면 '신입'으로 기재
SELECT CASE WHEN TRIM(POSITION) = '' THEN '신입' ELSE POSITION END AS POSITION FROM player GROUP BY POSITION;
-- 004. 수원팀에서 골키퍼(GK)의 이름을 모두 출력하시오. 단 수원팀 ID는 K02 입니다.
SELECT player_name FROM player WHERE team_id = 'K02' AND POSITION = 'GK'
-- 005. 수원팀에서 성이 고씨이고 키가 170 이상인 선수를 출력하시오. 단 수원팀 ID는 K02 입니다.
SELECT * FROM player WHERE height>= 170 AND team_id = 'K02' AND player_name LIKE '고%'

SELECT * FROM team;
SELECT * FROM player;

-- 문제 6
-- 다음 조건을 만족하는 선수명단을 출력하시오
-- 소속팀이 삼성블루윙즈이거나
-- 드래곤즈에 소속된 선수들이어야 하고,
-- 포지션이 미드필더(MF:Midfielder)이어야 한다.
-- 키는 170 센티미터 이상이고 180 이하여야 한다.
SELECT player_name FROM player WHERE POSITION = 'MF' AND height >= 170 AND height <= 180 AND team_id IN (SELECT team_id
																																			FROM team
																																			WHERE team_name = '삼성블루윙즈' or team_name = '드래곤즈');

-- 문제 7-- 수원을 연고지로 하는 골키퍼는 누구인가?
SELECT player_name FROM player WHERE POSITION = 'GK' AND team_id = (SELECT team_id FROM team WHERE region_name = '수원');

-- 문제 8-- 서울팀 선수들 이름, 키, 몸무게 목록으로 출력하시오-- 키와 몸무게가 없으면 "0" 으로 표시하시오-- 키와 몸무게는 내림차순으로 정렬하시오
SELECT player_name, if(height='',0,height),if(weight='',0,weight)
FROM player
WHERE team_id=(SELECT team_id FROM team WHERE region_name = '서울')
ORDER BY height,weight DESC;

-- 문제 9-- 서울팀 선수들 이름과 포지션과-- 키(cm표시)와 몸무게(kg표시)와  각 선수의 BMI지수를 출력하시오
-- 단, 키와 몸무게가 없으면 "0" 표시하시오-- BMI는 "NONE" 으로 표시하시오(as bmi)-- 최종 결과는 이름내림차순으로 정렬하시오
SELECT player_name, POSITION,
CONCAT(IFNULL(NULLIF(height,''),'0'),'cm')height,
CONCAT(IFNULL(NULLIF(weight,''),'0'),'cm')weight,
IFNULL(NULLIF(ROUND(weight / (height/100 * height/100)),''),'NONE') bmi
FROM player
WHERE team_id = (SELECT team_id FROM team WHERE region_name = '서울')
ORDER BY player_name DESC;

SHOW TABLES;
DROP TABLE articles;
SELECT * FROM team;

SHOW TABLES;

SELECT * FROM schedule;

SELECT * FROM player;
FROM stadium s
	JOIN team t ON s.stadium_id = t.stadium_id
	JOIN player p ON t.team_id = p.team_id
	JOIN schedule sc ON s.stadium_id = sc.stadium_id;

-- 문제 10
-- 수원팀(K02) 과 대전팀(K10) 선수들 중 포지션이 골키퍼(GK) 인
-- 선수를 출력하시오
-- 단 , 팀명, 선수명 오름차순 정렬하시오
SELECT t.team_name,p.player_name, p.POSITION
FROM team t
JOIN player p ON t.team_id = p.team_id
WHERE p.POSITION = 'GK' AND t.team_id IN ('K02','K10')
ORDER BY 1,2;

SELECT * FROM team;
SELECT * FROM player;

-- 문제 11
-- 팀과 연고지를 연결해서 출력하시오
-- [팀 명]             [홈구장]
-- 수원[ ]삼성블루윙즈 수원월드컵경기장

SELECT concat(t.region_name, ' ', t.team_name)'[팀 명]', s.stadium_name '[홈구장]'
FROM stadium s
	JOIN team t ON s.stadium_id = t.stadium_id
WHERE t.region_name LIKE '수원%'
;

SELECT * FROM team;
SELECT * FROM player;
SELECT * FROM stadium;

-- 문제 12
-- 수원팀(K02) 과 대전팀(K10) 선수들 중
-- 키가 180 이상 183 이하인 선수들
-- 키, 팀명, 사람명 오름차순
SELECT   p.height, t.team_name, p.player_name
FROM team t
JOIN player p ON t.team_id = p.team_id
WHERE p.height <= 183 and p.height >= 180 AND t.team_id IN ('K02','K10')
ORDER BY  2,1,3;

SELECT * FROM team;
SELECT * FROM player;

-- 문제 13
-- 모든 선수들 중 포지션을 배정 받지 못한 선수들의
-- 팀명과 선수이름 출력 둘다 오름차순
SELECT t.team_name, p.player_name
FROM team t
JOIN player p ON p.team_id = t.team_id
WHERE p.position = ''
ORDER BY 1,2;

SELECT * FROM team;
SELECT * FROM player;

스칼라와 조인  사용
 -- 문제 14
-- 팀과 스타디움, 스케줄을 조인하여
-- 2012년 3월 17일에 열린 각 경기의
-- 팀이름, 스타디움, 어웨이팀 이름 출력
-- 다중테이블 join 을 찾아서 해결하시오.
SELECT t.team_name HOME_TEAM, s.stadium_name,(SELECT t.team_name
															 FROM team t
															 WHERE sc.awayteam_id = t.team_id)AWAY_TEAM
FROM stadium s
JOIN schedule sc ON s.stadium_id = sc.stadium_id
JOIN team t ON s.stadium_id = t.stadium_id
WHERE sc.sche_date = '20120317';

SELECT * FROM team;
-- 문제 15
-- 2012년 3월 17일 경기에
-- 포항 스틸러스 소속 골키퍼(GK)
-- 선수, 포지션,팀명 (연고지포함),
-- 스타디움, 경기날짜를 구하시오
-- 연고지와 팀이름은 간격을 띄우시오(수원[]삼성블루윙즈)
SELECT p.player_name '선수', p.POSITION'포지션', CONCAT(t.region_name, ' ',t.team_name)'팀명',s.stadium_name'스타디움',sc.sche_date'경기날짜'
FROM stadium s
JOIN team t ON s.stadium_id = t.stadium_id
JOIN player p ON t.team_id = p.team_id
JOIN schedule sc ON s.stadium_id = sc.stadium_id
WHERE sc.sche_date = 20120317 AND p.team_id = 'K03' AND p.POSITION = 'GK';

-- 문제 16
-- 홈팀이 3점이상 차이로 승리한 경기의
-- 경기장 이름, 경기 일정
-- 홈팀 이름과 원정팀 이름을
-- 구하시오
SELECT DISTINCT s.stadium_name'경기장 이름', sc.sche_date'경기 일정', (select t.team_name FROM team t WHERE t.team_id = sc.hometeam_id)'홈팀', (select t.team_name FROM team t WHERE t.team_id = sc.awayteam_id)'어웨이팀'
FROM stadium s
JOIN team t USING (stadium_id)-- ON s.stadium_id = t.stadium_id
JOIN player p ON t.team_id = p.team_id
JOIN schedule sc ON s.stadium_id = sc.stadium_id
WHERE sc.home_score - sc.away_score > 2;

-- 문제 17
-- STADIUM 에 등록된 운동장 중에서
-- 홈팀이 없는 경기장까지 전부 나오도록
-- 카운트 값은 19
-- 힌트 : LEFT JOIN 사용해야함
-- 경기장 이름, 홈팀
SELECT s.stadium_name'경기장 이름', (SELECT team_name FROM team t WHERE t.team_id = s.hometeam_id)'홈팀'
FROM stadium s -- 실전: 스칼라-> 빠름

SELECT s.stadium_name, t.team_name
FROM stadium s LEFT JOIN team t USING(stadium_id); -- 학습용: 느림

SELECT * FROM stadium;
SELECT * FROM team;

-- 문제 18 페이지네이션 로직을 위한
-- 플레이어 테이블에서 최상단 5개 로우를 출력
SELECT plater_name
FROM player
ORDER BY 1 LIMIT 0,5;

-- 문제 19 (그룹바이: 집계함수 - 딱 5개 min, max, count, sum, avg)
-- 평균키가 인천 유나이티스팀('K04')의 평균키  보다 작은 팀의
-- 팀ID, 팀명, 평균키 추출
-- 인천 유나이티스팀의 평균키 -- 176.59
-- 키와 몸무게가 없는 칸은 0 값으로 처리한 후 평균값에
-- 포함되지 않도록 하세요.
SELECT p.team_id'팀아이디',team_name'팀이름',ROUND(AVG(height),2)'평균'
FROM team t
JOIN player p ON t.team_id = p.team_id
WHERE if(p.height = '',0,p.height)
GROUP BY p.team_id
HAVING AVG(p.height) < (SELECT AVG(p.height)
FROM team JOIN player p USING (team_id)
WHERE region_name = '인천');

-- 문제 20
-- 포지션이 MF 인 선수들의 소속팀명 및  선수명, 백넘버 출력
SELECT t.team_name '소속팀', CONCAT(p.player_name, ' (', p.back_no, ')')'선수정보'
FROM team t
JOIN player p USING (team_id)
WHERE p.position = 'MF';

SELECT * FROM player
SELECT * FROM team

-- 문제 21
-- 가장 키큰 선수 5명 소속팀명 및  선수명, 백넘버 출력,
-- 단 키  값이 없으면 제외
SELECT (SELECT t.team_name FROM team t WHERE t.team_id = p.team_id)'소속팀', CONCAT(p.player_name,'(',p.back_no,')')'선수정보',p.height
from player p
ORDER BY p.height DESC
LIMIT 5;

SELECT * FROM player
SELECT * FROM team

-- 문제 22
-- 선수 자신이 속한 팀의 평균키보다 작은  선수 정보 출력
-- (select round(avg(height),2) from player)
SELECT p.*
FROM player p
JOIN (SELECT p2.team_id, ROUND(AVG(p2.height), 2) avg
		FROM player p2
		WHERE p2.height != ''
		GROUP BY p2.team_id) t_avg USING (team_id)
WHERE p.height != ''
AND p.height < AVG;

-- 문제 23
-- 2012년 5월 한달간 경기가 있는 경기장  조회
SELECT (SELECT stadium_name FROM stadium s WHERE sc.stadium_id = s.stadium_id) '경기장',sche_date'경기 날짜'
FROM schedule sc
WHERE sche_date LIKE '201205%';

SELECT * FROM stadium
SELECT * FROM schedule
