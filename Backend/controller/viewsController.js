const mongoose = require('mongoose');
const { 
    train,
    station,
    trainSchedule,
    line 
} = require('../models/modules');



const viewOne = async (req, res) => {
    const aggCursor = await train.aggregate([
      {
        '$match': {
          'starting_dest': 'Finch'
        }
      }, {
        '$lookup': {
          'from': 'stations', 
          'localField': 'line_num', 
          'foreignField': 'line', 
          'pipeline': [
            {
              '$match': {
                'station_name': 'Finch'
              }
            }
          ], 
          'as': 'trainsJoinStations'
        }
      }, {
        '$lookup': {
          'from': 'trainschedules', 
          'localField': 'id', 
          'foreignField': 'train_id', 
          'as': 'trainsJoinTrainS'
        }
      }, {
        '$project': {
          '_id': 1, 
          'trainsJoinTrainS.start_time': 1, 
          'trainsJoinStations.avail_parking': 1, 
          'trainsJoinTrainS.remaining_capacity': 1
        }
      }, {
        '$addFields': {
          'viewOne': {
            '$concatArrays': [
              '$trainsJoinTrainS.start_time', '$trainsJoinTrainS.remaining_capacity', '$trainsJoinStations.avail_parking'
            ]
          }
        }
      }, {
        '$project': {
          'viewOne': 1
        }
      }
    ]);
    res.status(200).json(aggCursor);
    // let stringJson = JSON.stringify(aggCursor);
    let parseJson = JSON.stringify(aggCursor)
    let jsonParsed = JSON.parse(parseJson);
    function printValues(obj){
      for(var k in obj) {
        if(obj[k] instanceof Object) {
          printValues(obj[k]);
        } else {
        console.log(obj[k]);
        }
      }
    }

    printValues(jsonParsed);

    // await aggCursor.forEach(list => {
    //   console.log(`${list.start_time}: ${list.remaining_capacity}`)
    // })

}

const viewTwo = async (req, res) => {
  const aggCursor = await trainSchedule.aggregate([
    {
      '$lookup': {
        'from': 'trains', 
        'localField': 'train_id', 
        'foreignField': 'id', 
        'as': 'oof'
      }
    }, {
      '$lookup': {
        'from': 'stations', 
        'localField': 'oof.line_num', 
        'foreignField': 'line', 
        'as': 'trainscheduleJoinStations'
      }
    }, {
      '$match': {
        'trainscheduleJoinStations.station_name': 'Finch'
      }
    }, {
      '$addFields': {
        'average': 91.4
      }
    }, {
      '$addFields': {
        'not_busy': {
          '$gt': [
            '$remaining_capacity', '$average'
          ]
        }
      }
    }, {
      '$match': {
        'not_busy': true
      }
    }, {
      '$project': {
        'remaining_capacity': 1, 
        'trainscheduleJoinStations.avail_parking': 1, 
        'trainscheduleJoinStations.station_name': 1, 
        'start_time': 1
      }
    }
  ]
);
res.status(200).json(aggCursor);
}

const viewThree = async (req, res) => {
  const aggCursor = await station.aggregate([
    {
      '$match': {
        'line': '1', 
        'avail_parking': {
          '$gt': '200'
        }
      }
    }, {
      '$project': {
        'station_name': 1, 
        'avail_parking': 1
      }
    }
  ]);
res.status(200).json(aggCursor);
}

const viewFour = async (req, res) => {
  const aggCursor = await train.aggregate([
    {
      '$lookup': {
        'from': 'stations', 
        'localField': 'line_num', 
        'foreignField': 'line', 
        'as': 'trainsJoinStation'
      }
    }, {
      '$lookup': {
        'from': 'trainschedules', 
        'localField': 'id', 
        'foreignField': 'train_id', 
        'as': 'trainsJoinTrainS'
      }
    }, {
      '$match': {
        '$and': [
          {
            'capacity': {
              '$lt': 200
            }, 
            'trainsJoinStation.avail_parking': {
              '$gt': '200'
            }
          }
        ]
      }
    }, {
      '$project': {
        'trainsJoinStation.station_name': 1, 
        'trainsJoinStation.avail_parking': 1, 
        'capacity': 1, 
        'trainsJoinTrainS.start_time': 1
      }
    }
  ]);
res.status(200).json(aggCursor);
}

const viewFive = async (req, res) => {
  const aggCursor = await train.aggregate([
    {
      '$match': {
        'starting_dest': {
          '$in': [
            'Finch', 'Vaughan'
          ]
        }
      }
    }, {
      '$lookup': {
        'from': 'trainschedules', 
        'localField': 'id', 
        'foreignField': 'train_id', 
        'as': 'result'
      }
    }, {
      '$project': {
        'starting_dest': 1, 
        'result.start_time': 1
      }
    }
  ]);
res.status(200).json(aggCursor);
}

const viewSix = async (req, res) => {
  const aggCursor = await station.aggregate([
    {
      '$match': {
        '$and': [
          {
            'station_id': {
              '$gt': '104'
            }
          }, {
            'station_id': {
              '$lt': '113'
            }
          }
        ]
      }
    }, {
      '$project': {
        'station_name': 1
      }
    }
  ]);
res.status(200).json(aggCursor);
}

const viewSeven = async (req, res) => {
  const aggCursor = await train.aggregate([
    {
      '$lookup': {
        'from': 'stations', 
        'localField': 'starting_dest', 
        'foreignField': 'station_name', 
        'pipeline': [
          {
            '$match': {
              'line': '2'
            }
          }
        ], 
        'as': 'trainJoinStation'
      }
    }, {
      '$match': {
        'line_num': '2'
      }
    }, {
      '$lookup': {
        'from': 'trainschedules', 
        'localField': 'id', 
        'foreignField': 'train_id', 
        'as': 'trainJoinTrainS'
      }
    }, {
      '$match': {
        'trainJoinTrainS.start_time': {
          '$ne': '9:00'
        }
      }
    }, {
      '$project': {
        'starting_dest': 1, 
        'trainJoinTrainS.start_time': 1, 
        'trainJoinStation.avail_parking': 1, 
        'trainJoinTrainS.remaining_capacity': 1
      }
    }
  ]);
res.status(200).json(aggCursor);
}

const viewEight = async (req, res) => {
  const aggCursor = await train.aggregate([
    {
      '$lookup': {
        'from': 'trainschedules', 
        'localField': 'id', 
        'foreignField': 'train_id', 
        'as': 'trainJoinTrainS'
      }
    }, {
      '$match': {
        'trainJoinTrainS.start_time': '9:00'
      }
    }, {
      '$project': {
        'starting_dest': 1, 
        'trainJoinTrainS.start_time': 1, 
        'trainJoinTrainS.remaining_capacity': 1
      }
    }
  ]);
res.status(200).json(aggCursor);
}

const viewNine = async (req, res) => {
  const aggCursor = await station.aggregate([
    {
      '$lookup': {
        'from': 'stations', 
        'localField': 'station_name', 
        'foreignField': 'station_name', 
        'pipeline': [
          {
            '$match': {
              'line': {
                '$in': [
                  '1', '2'
                ]
              }
            }
          }
        ], 
        'as': 'stationJoinStation'
      }
    }, {
      '$match': {
        'line': {
          '$in': [
            '1', '2'
          ]
        }
      }
    }, {
      '$group': {
        '_id': {
          'id': '$stationJoinStation._id', 
          'line': '$stationJoinStation.line', 
          'station': '$station_name'
        }
      }
    }, {
      '$match': {
        '_id.line': '1'
      }
    }, {
      '$match': {
        '_id.line': '2'
      }
    }
  ]);
res.status(200).json(aggCursor);
}

const viewTen = async (req, res) => {
  const aggCursor = await train.aggregate([
    {
      '$lookup': {
        'from': 'trainschedules', 
        'localField': 'id', 
        'foreignField': 'train_id', 
        'pipeline': [
          {
            '$project': {
              'start_time': 1
            }
          }
        ], 
        'as': 'trainsJoinTrainS'
      }
    }, {
      '$match': {
        'starting_dest': 'Kennedy'
      }
    }
  ]);
res.status(200).json(aggCursor);
}


module.exports = {
    viewOne,
    viewTwo,
    viewThree,
    viewFour,
    viewFive,
    viewSix,
    viewSeven,
    viewEight,
    viewNine,
    viewTen,
}