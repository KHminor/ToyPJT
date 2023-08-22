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

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverPadding(
              padding: EdgeInsets.fromLTRB(30, 50, 30, 0),
            sliver: SliverList(
                delegate: SliverChildListDelegate(
                    [
                      Section1()
                    ]
                )
            ),
          )
        ],
      ),
    );
  }
}

class Section1 extends StatelessWidget {
  const Section1({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [Text('김홍민', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w600),), Text('님')],
                ),
                Row(
                  children: [Text('태양의 열정, 그늘의 여유 '), Icon(Icons.beach_access,color: Colors.deepOrangeAccent,)],
                )
              ],
            ),
          ),
          Container(
            child: Row(
              children: [
                Icon(Icons.search, size: 35,),
                SizedBox(width: 10),
                Icon(Icons.notification_add_outlined, size: 35,),
                SizedBox(width: 10),
                Icon(Icons.menu, size: 35,)
              ],
            ),
          )

        ],
      ),
    );
  }
}


