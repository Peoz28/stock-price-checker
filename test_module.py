import unittest
from mean_var_std import calculate

class UnitTests(unittest.TestCase):
    def test_calculate(self):
        actual = calculate([2,6,2,8,4,0,1,5,7])
        expected = {
            'mean': [[3.6666666666666665, 5.0, 3.0], [1.0, 4.0, 7.0], 3.888888888888889],
            'variance': [[9.555555555555557, 0.6666666666666666, 8.666666666666666], [3.6666666666666665, 11.555555555555557, 4.666666666666667], 6.987654320987654],
            'standard deviation': [[3.0912061651652345, 0.816496580927726, 2.943920288775949], [1.914854215512676, 3.399346342395194, 2.160246899469287], 2.6434171674156266],
            'max': [[8, 6, 7], [6, 8, 7], 8],
            'min': [[1, 4, 0], [2, 0, 1], 0],
            'sum': [[11, 15, 9], [9, 12, 15], 35]
        }
        self.assertAlmostEqual(actual['mean'][0][0], expected['mean'][0][0], places=2, msg="Expected different mean when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['mean'][0][1], expected['mean'][0][1], places=2, msg="Expected different mean when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['mean'][0][2], expected['mean'][0][2], places=2, msg="Expected different mean when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['mean'][1][0], expected['mean'][1][0], places=2, msg="Expected different mean when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['mean'][1][1], expected['mean'][1][1], places=2, msg="Expected different mean when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['mean'][1][2], expected['mean'][1][2], places=2, msg="Expected different mean when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['mean'][2], expected['mean'][2], places=2, msg="Expected different mean when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")

        self.assertAlmostEqual(actual['variance'][0][0], expected['variance'][0][0], places=2, msg="Expected different variance when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['variance'][0][1], expected['variance'][0][1], places=2, msg="Expected different variance when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['variance'][0][2], expected['variance'][0][2], places=2, msg="Expected different variance when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['variance'][1][0], expected['variance'][1][0], places=2, msg="Expected different variance when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['variance'][1][1], expected['variance'][1][1], places=2, msg="Expected different variance when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['variance'][1][2], expected['variance'][1][2], places=2, msg="Expected different variance when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['variance'][2], expected['variance'][2], places=2, msg="Expected different variance when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")

        self.assertAlmostEqual(actual['standard deviation'][0][0], expected['standard deviation'][0][0], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['standard deviation'][0][1], expected['standard deviation'][0][1], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['standard deviation'][0][2], expected['standard deviation'][0][2], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['standard deviation'][1][0], expected['standard deviation'][1][0], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['standard deviation'][1][1], expected['standard deviation'][1][1], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['standard deviation'][1][2], expected['standard deviation'][1][2], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
        self.assertAlmostEqual(actual['standard deviation'][2], expected['standard deviation'][2], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")

        for key in ['max', 'min', 'sum']:
            self.assertEqual(actual[key][0], expected[key][0], f"Expected different {key} when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
            self.assertEqual(actual[key][1], expected[key][1], f"Expected different {key} when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")
            self.assertEqual(actual[key][2], expected[key][2], f"Expected different {key} when calling 'calculate()' with '[2,6,2,8,4,0,1,5,7]'")

    def test_calculate2(self):
        actual = calculate([9,1,5,3,3,3,2,9,0])
        expected = {
            'mean': [[4.666666666666667, 4.333333333333333, 2.6666666666666665], [5.0, 3.0, 3.6666666666666665], 3.888888888888889],
            'variance': [[9.555555555555557, 11.555555555555557, 4.222222222222222], [10.666666666666666, 0.0, 1.5555555555555554], 6.987654320987654],
            'standard deviation': [[3.0912061651652345, 3.399346342395194, 2.0548046676563256], [3.266001587843843, 0.0, 1.247219128924647], 2.6434171674156266],
            'max': [[9, 9, 5], [9, 3, 9], 9],
            'min': [[2, 1, 0], [1, 3, 0], 0],
            'sum': [[14, 13, 8], [15, 9, 11], 35]
        }
        self.assertAlmostEqual(actual['mean'][0][0], expected['mean'][0][0], places=2, msg="Expected different mean when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['mean'][0][1], expected['mean'][0][1], places=2, msg="Expected different mean when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['mean'][0][2], expected['mean'][0][2], places=2, msg="Expected different mean when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['mean'][1][0], expected['mean'][1][0], places=2, msg="Expected different mean when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['mean'][1][1], expected['mean'][1][1], places=2, msg="Expected different mean when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['mean'][1][2], expected['mean'][1][2], places=2, msg="Expected different mean when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['mean'][2], expected['mean'][2], places=2, msg="Expected different mean when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")

        self.assertAlmostEqual(actual['variance'][0][0], expected['variance'][0][0], places=2, msg="Expected different variance when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['variance'][0][1], expected['variance'][0][1], places=2, msg="Expected different variance when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['variance'][0][2], expected['variance'][0][2], places=2, msg="Expected different variance when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['variance'][1][0], expected['variance'][1][0], places=2, msg="Expected different variance when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['variance'][1][1], expected['variance'][1][1], places=2, msg="Expected different variance when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['variance'][1][2], expected['variance'][1][2], places=2, msg="Expected different variance when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['variance'][2], expected['variance'][2], places=2, msg="Expected different variance when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")

        self.assertAlmostEqual(actual['standard deviation'][0][0], expected['standard deviation'][0][0], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['standard deviation'][0][1], expected['standard deviation'][0][1], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['standard deviation'][0][2], expected['standard deviation'][0][2], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['standard deviation'][1][0], expected['standard deviation'][1][0], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['standard deviation'][1][1], expected['standard deviation'][1][1], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['standard deviation'][1][2], expected['standard deviation'][1][2], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
        self.assertAlmostEqual(actual['standard deviation'][2], expected['standard deviation'][2], places=2, msg="Expected different standard deviation when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")

        for key in ['max', 'min', 'sum']:
            self.assertEqual(actual[key][0], expected[key][0], f"Expected different {key} when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
            self.assertEqual(actual[key][1], expected[key][1], f"Expected different {key} when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")
            self.assertEqual(actual[key][2], expected[key][2], f"Expected different {key} when calling 'calculate()' with '[9,1,5,3,3,3,2,9,0]'")

    def test_calculate_with_fewer_digits(self):
        self.assertRaisesRegex(ValueError, "List must contain nine numbers.", calculate, [2,6,2,8,4,0,1,])

if __name__ == "__main__":
    unittest.main() 