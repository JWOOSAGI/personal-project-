package com.von.api.common;

public class UtilServiceImpl implements UtilService {

    private static UtilService instance = new UtilServiceImpl();

    private UtilServiceImpl(){}

    public static UtilService getInstance(){
        return instance;
    }

    @Override
    public int createRandomInteger(int start, int gapBetweenStartAndEnd) {
        //0이상 50미만의 값을 생성하고 150을 더해줌으로써 키의 범위를 150 이상 200 미만으로 만듦
        return start + (int)(Math.random() * gapBetweenStartAndEnd);
    }

    @Override
    public double createRandomDouble(int start, int gapBetweenStartAndEnd) {
        return Double.parseDouble(String.format("%.1f",
                (Math.random()*gapBetweenStartAndEnd)+start));
    }

    @Override
    public String createRandomUserName() {
        String randomName = "";
        for(; randomName.length() < 5;
            randomName += String.valueOf((char)('a' + this.createRandomInteger(0, 26))));
        return randomName;
    }

    @Override
    public String createRandomName() {
        String[] names = {"엄현지", "마동석", "송강호", "윤여정", "황정민"
                , "정우성", "이병헌", "현 빈", "유해진", "손석구"
                , "전도연", "손예진", "하지원", "김하늘", "송중기"
                , "하정우", "장동건", "원 빈", "박해일", "소지섭", "김혜수"};
        return names[createRandomInteger(0,20)];
    }

    @Override
    public String createRandomTitle(){
        String[] titles = {"국회는 정부","차기국회의 승인","법관이 발부"
                ,"현행범인","농수산물의 수급균형","대통령 및 국회의원"
                ,"대통령","피선거권","모든 국민","발부한 영장"};
        return titles[createRandomInteger(0,10)];
    }
    @Override
    public String createRandomContent(){
        String[] contents = {"국회는 정부의 동의없이 정부가 제출한 지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다.",
                "예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은 차기국회의 승인을 얻어야 한다.",
                "행정각부의 설치·조직과 직무범위는 법률로 정한다. 국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로 폐기되지 아니한다.",
                "다만, 국회의원의 임기가 만료된 때에는 그러하지 아니하다.",
                "체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.",
                "다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.",
                "모든 국민은 자기의 행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다.",
                "국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다.",
                "이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.",
                "헌법에 의하여 체결·공포된 조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을 가진다.",
                "법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다.",
                "대통령으로 선거될 수 있는 자는 국회의원의 피선거권이 있고 선거일 현재 40세에 달하여야 한다."};
        return contents[createRandomInteger(0,12)];
    }

    @Override
    public String createRandomCompany() {
        String[] companies = {"구글","삼성","네이버","엔비디아","메타","LG","애플"};
        return companies[createRandomInteger(0,7)];
    }
}
