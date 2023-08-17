import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: MyApp(),
    )
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.grey,
        titleTextStyle: TextStyle(color: Colors.black),
        elevation: 0,
        title: Text('홈'),
        actions: [
          IconButton(onPressed: (){}, icon: Icon(Icons.chat)),
          IconButton(onPressed: (){}, icon: Icon(Icons.mic)),
          IconButton(onPressed: (){}, icon: Icon(Icons.person_sharp)),
        ],
      ),
      body: CustomScrollView(
        slivers: [
          SliverList(
              delegate: SliverChildListDelegate(
                [
                  ElevatedButton(
                    onPressed: (){},
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Container(
                          child: Row(
                            children: [
                              Icon(Icons.money),
                              Text('      '),
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text('센스 있는 직장인들의 대처법❤'),
                                  Text('목돈 필요할 때 한도를 알아보세요')
                                ],
                              ),
                            ],
                          ),
                        ),
                        Icon(Icons.arrow_right)
                      ],
                    )
                  ),
                  ElevatedButton(
                      onPressed: (){},
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text('내 계좌'),
                          Row(
                            children: [
                              Text('전체보기'),
                              Icon(Icons.arrow_right)
                            ],
                          ),
                        ],
                      )
                  )
                ]
              )
          )
        ],
      ),
    );
  }
}

