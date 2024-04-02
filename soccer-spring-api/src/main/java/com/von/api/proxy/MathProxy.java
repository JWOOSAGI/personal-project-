package com.von.api.proxy;

import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;

public class MathProxy {
    public static Function<Integer, Integer> absInt = Math::abs;
    public static Function<Long, Long> absLong = Math::abs;;
    public static Function<Float, Float> absFloat = Math::abs;
    public static Function<Double, Double> absDouble = Math::abs;

    //Math.ceil
    public static Function<Double, Double> ceilDouble = Math::ceil;

    //Math.floor
    public static Function<Double, Double> floorDouble = Math::floor;

    //Math.round
    public static Function<Float, Integer> roundFloat = Math::round;
    public static Function<Double, Long> roundDouble = Math::round;

    public static BiFunction<Integer, Integer, Integer> maxInt = Math::max;
    public static BiFunction<Integer, Integer, Integer> minInt = Math::min;
    public static Supplier<Double> randomDouble = Math::random;
    public static BiFunction<Integer, Integer, Integer> randomInt = (a,b) -> (int)(Math.random()*(b-a)+a);
}