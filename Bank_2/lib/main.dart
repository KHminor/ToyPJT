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
            padding: EdgeInsets.all(10),
            sliver: Column(
              children: [
              ],
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
        children: [
          Container(
            child: Column(
              children: [
                Row(
                  children: [Text('김홍민'), Text('님')],
                ),
                Row(
                  children: [Text('태양의 열정, 그늘의 여유'), Icon(Icons.beach_access)],
                )
              ],
            ),
          ),
          Container(
            child: Row(
              children: [
                Icon(Icons.search),
                Icon(Icons.notification_add_outlined),
                Icon(Icons.menu)
              ],
            ),
          )

        ],
      ),
    );
  }
}


