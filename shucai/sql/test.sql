-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 11 月 23 日 16:52
-- 服务器版本: 5.5.40
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `datainformation`
--

CREATE TABLE IF NOT EXISTS `datainformation` (
  `Cnt` int(4) DEFAULT NULL,
  `MachineID` int(4) DEFAULT NULL,
  `MachineName` varchar(40) DEFAULT NULL,
  `ShiftNo` varchar(20) DEFAULT NULL,
  `Brand` varchar(20) DEFAULT NULL,
  `PowerOffTimer` decimal(8,0) DEFAULT NULL,
  `PrepareTimer` decimal(8,0) DEFAULT NULL,
  `InternalTimer` decimal(8,0) DEFAULT NULL,
  `ExiternalTimer` decimal(8,0) DEFAULT NULL,
  `RunningTimer` decimal(8,0) DEFAULT NULL,
  `ProductTimer` decimal(8,0) DEFAULT NULL,
  `WaittingTimer` decimal(8,0) DEFAULT NULL,
  `MaxRunningTimer` decimal(8,0) DEFAULT NULL,
  `AvgRunningTimer` decimal(8,0) DEFAULT NULL,
  `TheoreticalProduct` decimal(8,0) DEFAULT NULL,
  `RealProduct` decimal(8,0) DEFAULT NULL,
  `RejectProduct` decimal(8,0) DEFAULT NULL,
  `MissedProduct` decimal(8,0) DEFAULT NULL,
  `NominalSpeed` int(4) DEFAULT NULL,
  `StopNumber` int(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `datainformation`
--

INSERT INTO `datainformation` (`Cnt`, `MachineID`, `MachineName`, `ShiftNo`, `Brand`, `PowerOffTimer`, `PrepareTimer`, `InternalTimer`, `ExiternalTimer`, `RunningTimer`, `ProductTimer`, `WaittingTimer`, `MaxRunningTimer`, `AvgRunningTimer`, `TheoreticalProduct`, `RealProduct`, `RejectProduct`, `MissedProduct`, `NominalSpeed`, `StopNumber`) VALUES
(192, 0, '电控柜                                  ', '2016-11-23-3', '', '10393', '76', '0', '0', '6664', '6664', '0', '6664', '2221', '0', '0', '0', '0', 0, 3),
(192, 1, '辅机                                    ', '2016-11-23-3', '', '10393', '80', '0', '0', '6660', '6660', '0', '6660', '6660', '44394', '10063', '10345', '23986', 400, 0),
(192, 2, '主机                                    ', '2016-11-23-3', '', '10393', '81', '0', '0', '6659', '6659', '0', '6659', '6659', '44387', '9758', '9940', '24689', 400, 1);

-- --------------------------------------------------------

--
-- 表的结构 `dataproduct`
--

CREATE TABLE IF NOT EXISTS `dataproduct` (
  `Cnt` int(4) DEFAULT NULL,
  `MachineID` int(4) DEFAULT NULL,
  `MachineName` varchar(40) DEFAULT NULL,
  `ShiftNo` varchar(20) DEFAULT NULL,
  `Brand` varchar(20) DEFAULT NULL,
  `ClassID` int(4) DEFAULT NULL,
  `ClassName` varchar(40) DEFAULT NULL,
  `CounterID` int(4) DEFAULT NULL,
  `CounterName` varchar(40) DEFAULT NULL,
  `lnValue` decimal(8,0) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `dataproduct`
--

INSERT INTO `dataproduct` (`Cnt`, `MachineID`, `MachineName`, `ShiftNo`, `Brand`, `ClassID`, `ClassName`, `CounterID`, `CounterName`, `lnValue`) VALUES
(192, 1, '辅机                                    ', '2016-11-23-3', '', 0, '透包机生产数据                          ', 0, '透包机实际产量                          ', '500'),
(192, 1, '辅机                                    ', '2016-11-23-3', '', 0, '透包机生产数据                          ', 1, '好烟包剔除量                            ', '500'),
(192, 1, '辅机                                    ', '2016-11-23-3', '', 0, '透包机生产数据                          ', 2, '坏烟包剔除数                            ', '500'),
(192, 1, '辅机                                    ', '2016-11-23-3', '', 0, '透包机生产数据                          ', 3, '不计产量的机器周期                      ', '400'),
(192, 1, '辅机                                    ', '2016-11-23-3', '', 4, '条包机生产数据                          ', 4, '条包机实际产量                          ', '10063'),
(192, 1, '辅机                                    ', '2016-11-23-3', '', 4, '条包机生产数据                          ', 5, '条包机剔除量                            ', '10345'),
(192, 1, '辅机                                    ', '2016-11-23-3', '', 4, '条包机生产数据                          ', 6, '机器空运行周期                          ', '100'),
(192, 1, '辅机                                    ', '2016-11-23-3', '', 4, '条包机生产数据                          ', 7, '不计产量的机器周期                      ', '200'),
(192, 1, '辅机                                    ', '2016-11-23-3', '', 1, '透包机剔除原因                          ', 15, '手动透包机透明纸拼接                    ', '3'),
(192, 1, '辅机                                    ', '2016-11-23-3', '', 1, '透包机剔除原因                          ', 18, '透包机手动剔除                          ', '2'),
(192, 2, '主机                                    ', '2016-11-23-3', '', 9, '主机生产数据                            ', 25, '主机实际产量                            ', '9758'),
(192, 2, '主机                                    ', '2016-11-23-3', '', 9, '主机生产数据                            ', 26, '出口处烟包剔除数量                      ', '9940'),
(192, 2, '主机                                    ', '2016-11-23-3', '', 17, '主机封签组事件                          ', 42, '封签涂胶器打开                          ', '3'),
(192, 2, '主机                                    ', '2016-11-23-3', '', 12, '主机包装线事件                          ', 44, '模盒烟支阻塞                            ', '1'),
(192, 2, '主机                                    ', '2016-11-23-3', '', 12, '主机包装线事件                          ', 45, '烟支滤嘴端错乱                          ', '2'),
(192, 2, '主机                                    ', '2016-11-23-3', '', 12, '主机包装线事件                          ', 48, '三轮入口阻塞                            ', '2'),
(192, 2, '主机                                    ', '2016-11-23-3', '', 12, '主机包装线事件                          ', 50, '四轮入口烟包阻塞                        ', '2'),
(192, 2, '主机                                    ', '2016-11-23-3', '', 15, '主机商标纸组事件                        ', 59, '商标胶缸平台打开                        ', '6');

-- --------------------------------------------------------

--
-- 表的结构 `datastopmessage`
--

CREATE TABLE IF NOT EXISTS `datastopmessage` (
  `Cnt` int(11) DEFAULT NULL,
  `MachineID` int(4) DEFAULT NULL,
  `MachineName` varchar(40) DEFAULT NULL,
  `ShiftNo` varchar(20) DEFAULT NULL,
  `Brand` varchar(20) DEFAULT NULL,
  `MessageID` int(4) DEFAULT NULL,
  `MessageName` varchar(40) DEFAULT NULL,
  `StopTimer` decimal(8,0) DEFAULT NULL,
  `StopTime` char(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `datastopmessage`
--

INSERT INTO `datastopmessage` (`Cnt`, `MachineID`, `MachineName`, `ShiftNo`, `Brand`, `MessageID`, `MessageName`, `StopTimer`, `StopTime`) VALUES
(192, 0, '电控柜                                  ', '2016-11-23-3', '', 4, '输入点诊断N06-01-Q0002                  ', '4522', '15:30.11'),
(192, 2, '主机                                    ', '2016-11-23-3', '', 649, '商标纸阻塞或检测失效                    ', '4516', '15:30.17');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
