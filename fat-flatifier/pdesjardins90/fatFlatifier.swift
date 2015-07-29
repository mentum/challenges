import Foundation

public class FatFlatifier {

    private let words: Int
    private let pairs: Int

    public init(words: Int?, pairs: Int?) {
        self.words = words ?? 0;
        self.pairs = pairs ?? 0;

        if !canFitAllPairs() {
            print("Can't fit in that many pairs!")
            exit(0)
        }
    }

    public func fatFlat() -> [String] {
        var result = [String](count: words, repeatedValue: "flat")
        var fats = 0
        var flats = words

        while ((fats + 1) * (flats - 1) < pairs) {
            result[fats] = "fat"
            fats++
            flats--
        }

        let lastIndex = words - 1
        let remainingPairs = pairs - fats * (flats - 1)
        result[lastIndex - remainingPairs] = "fat"

        return result
    }

    private func canFitAllPairs() -> Bool {
        let p = Double(pairs)
        let w = Double(words)
        let mid = ceil(w/2)

        return p <= mid * (w - mid)
    }

}
