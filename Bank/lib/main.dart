import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

void main() {
  runApp(
    MaterialApp(
      home: MyApp(),
    )
  );
}

class MyApp extends StatefulWidget {
  MyApp({super.key});
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {

  var clickState = 0;

  changeState(i) {
    setState(() {
      clickState = i;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(60),
        child: Container(
          alignment: Alignment.center,
          padding: EdgeInsets.fromLTRB(15, 15, 15, 0),
          child: AppBar(
            backgroundColor: Colors.white,
            titleTextStyle: TextStyle(color: Colors.black),
            elevation: 0,
            title: Text('홈', style: TextStyle(fontSize: 25, fontWeight: FontWeight.w900),),
            actions: [
              IconButton(onPressed: (){}, icon: Icon(Icons.chat, color: Colors.black, size: 28,), visualDensity: VisualDensity(horizontal: 0),),
              IconButton(onPressed: (){}, icon: Icon(Icons.mic, color: Colors.black, size: 28,), visualDensity: VisualDensity(horizontal: 0),),
              IconButton(onPressed: (){}, icon: Icon(Icons.person_sharp, color: Colors.black, size: 28,), visualDensity: VisualDensity(horizontal: 0),),
            ],
          ),
        ),
      ),
      body: [Home(), MoneyBus(), Shop(), Gift(), Menu()][clickState],
      bottomNavigationBar: BottomBar(clickState:clickState, changeState:changeState)
    );
  }
}

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      padding: EdgeInsets.all(15),
      child: CustomScrollView(
        slivers: [
          SliverList(
              delegate: SliverChildListDelegate(
                  [
                    Container(
                      margin: EdgeInsets.fromLTRB(0, 0, 0, 20),
                      child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          elevation: 1,
                          backgroundColor: Color(0xffE2E5F7),
                          padding: EdgeInsets.fromLTRB(15, 20, 15, 20),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(15)
                          )
                        ),
                        onPressed: (){},
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Container(
                              child: Row(
                                children: [
                                  Icon(Icons.money, color: Colors.black),
                                  Text('      '),
                                  Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Text('센스 있는 직장인들의 대처법❤', style: TextStyle(color: Colors.grey),),
                                      Text('목돈 필요할 때 한도를 알아보세요', style: TextStyle(color: Colors.black))
                                    ],
                                  ),
                                ],
                              ),
                            ),
                            Icon(Icons.arrow_right, color: Colors.grey)
                          ],
                        )
                      ),
                    ),
                    Container(
                      child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          elevation: 0,
                          backgroundColor: Colors.white,
                          padding: EdgeInsets.fromLTRB(15, 20, 15, 20),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15))
                        ),
                        onPressed: (){},
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text('내 계좌', style: TextStyle(fontSize: 18, color: Colors.black, fontWeight: FontWeight.w600),),
                            Row(
                              children: [
                                Text('전체보기', style: TextStyle(fontSize: 18, color: Colors.blue, fontWeight: FontWeight.w600),),
                                Icon(Icons.arrow_right, color: Colors.blue, size: 35,)
                              ],
                            ),
                          ],
                        )
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.fromLTRB(15, 15, 15, 0),
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Container(
                                child: Row(
                                  children: [
                                    Icon(Icons.circle_outlined, color: Colors.blue, size: 45,),
                                    Container(
                                      margin: EdgeInsets.fromLTRB(10, 0, 0, 0),
                                      child: Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            children: [
                                              Text('입출금 ', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800),),
                                              Text('U드림 저축예금 (인터넷전용)', style: TextStyle(fontSize: 14,)),
                                            ],
                                          ),
                                          Row(
                                            children: [
                                              Text('신한  110-395520-965', style: TextStyle(fontSize: 13),),
                                              IconButton(onPressed: (){}, icon: FlippedIcon(icon: Icons.copy_outlined))
                                            ],
                                          )
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                              IconButton(onPressed: (){}, icon: Icon(Icons.more_vert))
                            ],
                          )
                        ],
                      ),
                    ),
                    Container(
                      child: SwipingRow(),
                    )
                  ]
              )
          )
        ],
      ),
    );
  }
}

class MoneyBus extends StatelessWidget {
  const MoneyBus({super.key});

  @override
  Widget build(BuildContext context) {
    return Text('머니버스');
  }
}

class Shop extends StatelessWidget {
  const Shop({super.key});

  @override
  Widget build(BuildContext context) {
    return Text('상품');
  }
}

class Gift extends StatelessWidget {
  const Gift({super.key});

  @override
  Widget build(BuildContext context) {
    return Text('혜택');
  }
}

class Menu extends StatelessWidget {
  const Menu({super.key});

  @override
  Widget build(BuildContext context) {
    return Text('전체메뉴');
  }
}

class BottomBar extends StatelessWidget {
  BottomBar({super.key, this.clickState, this.changeState});
  final clickState;
  final changeState;

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      type: BottomNavigationBarType.fixed,
      currentIndex: clickState,
      onTap: (i){
        changeState(i);
      },
      selectedItemColor: Colors.blue,
      unselectedItemColor: Colors.grey,
      items: [
        BottomNavigationBarItem(
          icon: Icon(Icons.home),
          label: '홈',
        ),BottomNavigationBarItem(
          icon: Icon(Icons.money),
          label: '머니버스',
        ),BottomNavigationBarItem(
            icon: Icon(Icons.money),
            label: '머니버스'
        ),BottomNavigationBarItem(
            icon: Icon(Icons.money),
            label: '머니버스'
        ),
      ],
    );
  }
}


class FlippedIcon extends StatelessWidget {
  final IconData icon;

  FlippedIcon({required this.icon});

  @override
  Widget build(BuildContext context) {
    return Transform(
      alignment: Alignment.center,
      transform: Matrix4.identity()..scale(-1.0, 1.0, 1.0), // X 축으로 반전
      child: Icon(icon, color: Colors.grey.withOpacity(0.5),),
    );
  }
}


class SwipingRow extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 60,
      margin: EdgeInsets.fromLTRB(0, 10, 0, 10),
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          ElevatedButton(onPressed: () {}, child: Exchange(), style: ElevatedButton.styleFrom(backgroundColor: Colors.white),),
          ElevatedButton(onPressed: () {}, child: Exchange(), style: ElevatedButton.styleFrom(backgroundColor: Colors.white),),
          ElevatedButton(onPressed: () {}, child: Exchange(), style: ElevatedButton.styleFrom(backgroundColor: Colors.white, elevation: 1),),
          ElevatedButton(onPressed: () {}, child: Exchange(), style: ElevatedButton.styleFrom(backgroundColor: Colors.white, elevation: 1),),
          ElevatedButton(onPressed: () {}, child: Exchange(), style: ElevatedButton.styleFrom(backgroundColor: Colors.white, elevation: 1),),
          // 원하는 만큼 버튼을 추가
        ],
      ),
    );
  }
}

class Exchange extends StatelessWidget {
  const Exchange({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50,
      child: Row(
        children: [
          Icon(Icons.account_circle_outlined, color: Colors.deepOrangeAccent, size: 30,),
          Container(
            margin: EdgeInsets.fromLTRB(15, 0, 0, 0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('이름', style: TextStyle(color: Colors.black),),
                Text('100,000', style: TextStyle(color: Colors.black))
              ],
            ),
          )
        ],
    )
    );
  }
}
